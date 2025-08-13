/**
 * @DIR /src/api/comment/index.ts
 */

import { ErrorResponse } from "@/api/types";
import { NextApiRequest, NextApiResponse } from "next";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export async function fetchComments(post_id: string): Promise<Comment[]> {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`
  );
  const data: Comment[] = await result.json();

  return data;
}

interface ExtendsNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export interface CommentResponse {
  comments: Comment[];
}

export async function commentsApiHandler(
  req: ExtendsNextApiRequest,
  res: NextApiResponse<CommentResponse | ErrorResponse>
) {
  if (req.method !== "GET") {
    return res.status(400).json({ error_message: "Bad request" });
  }

  const postId = req.query.id;
  const parsedPostId = parseInt(postId);
  const isNan = Number.isNaN(parsedPostId);

  if (isNan) {
    return res.status(400).json({ error_message: "Bad request" });
  }

  try {
    const result = await fetchComments(postId);
    return res.status(200).json({ comments: result });
  } catch (e) {
    return res.status(500).json({ error_message: "failed to fetch" });
  }
}
