import style from "./paper.module.css";

export function Paper(props: IPaper){
    return <div className={style.paper_root} style={{width: props.width, height: props.height, margin: props.mx +" "+props.my}}>{props.children}</div>
}