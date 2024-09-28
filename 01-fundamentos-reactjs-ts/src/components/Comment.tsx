import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

        function handleLikeComment() { 
            setLikeCount((state) => {
                return state + 1
            });
        }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/guicpessoa.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Pessoa</strong>
                            <time title="16 de Setembro às 11:50h" dateTime="2024-09-16 11:51:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={(handleLikeComment)}>
                        <ThumbsUp/>
                        Gostei <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}