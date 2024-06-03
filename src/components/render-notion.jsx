import * as React from "react"
import * as styles from './render-notion.scss';

const RenderNotion = ({ title, MarkdownRemark, background_color }) => {
  const post = MarkdownRemark;
  const post_body = post.html;
  
  if (!post) {
    return (
      <div>
        <p>内容が見つかりませんでした。</p>
      </div>
    )
  }
  
  return (
    <div style={{ backgroundColor: background_color }} className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post_body }}
      />
    </div>
  )
}

export default RenderNotion;
