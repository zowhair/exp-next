export function Button({content, ...props}){
    return(
     
        <a href={props.link ? props.link : '' } className="btn">
            <span>{content}</span>
        </a>
    )
}