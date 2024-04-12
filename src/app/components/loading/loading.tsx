import style from "./loading.module.css";

export function Loading(){
    return (
        <div className={style.container}>
            <div className={style.ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}