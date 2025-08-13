import { CommentResponse } from "@/api/comment";
import { Post } from "@/api/post";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./index.module.css";

interface Props {
  post: Post;
}

const PostDetail: FC<Props> = (props) => {
  const { post } = props;

  const router = useRouter();

  const { data: commentList, isLoading } = useQuery(
    getCommentListQueryOptions(post.id)
  );

  console.log(commentList);

  if (router.isFallback) {
    return <main>Loading...</main>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
      <ol className={styles.commentList}>
        {isLoading
          ? "Loading comments"
          : commentList?.map((comment) => {
              return (
                <li key={comment.id}>
                  <span className={styles.name}>{comment.name}</span>
                  <span className={styles.email}>{comment.email}</span>
                  <p>{comment.body}</p>
                </li>
              );
            })}
      </ol>
    </main>
  );
};

export { PostDetail };

function getCommentListQueryOptions(
  postId: number
): UseQueryOptions<
  CommentResponse,
  Error,
  CommentResponse["comments"],
  [string, typeof postId]
> {
  return {
    queryKey: ["comment-list", postId],
    queryFn: async () => {
      const result = await fetch(`/api/post/${postId}/comment`);
      const data: CommentResponse = await result.json();
      return data;
    },
    select: (data) => {
      return data.comments;
    },
  };
}
