import { Link } from "react-router-dom";
interface BlogCardProps{
    authorName:string;
    title:string,
    content:string;
    publishedDate:string;
    id:number;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) =>{
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 ">
            <div>
                <Avatar name={authorName}/>
                <div>{authorName}</div>
                <div>
                    <Circle/>
                </div>
                <div>
                    {publishedDate}
                </div>
            </div>
            <div>
                {title}
            </div>
            <div>
                {content.slice(0,100)+"..."}
            </div>
            <div>
                {'${Math.ceil(content.length/100)} minute(s) read '}
            </div>
        </div>
    </Link>
}

export const Circle = ()=>{
    return <div>

    </div>
}
export const Avatar = ({name,size="small"}:{name:string,size?:"small"|"big"})=>{
    return <div>
        <span className={`${size ==="small"?"text-xs": "text-md"}font-extralight text-gray-600 dark:text-gray-300`}>
            {name[0]}
        </span>
    </div>
}