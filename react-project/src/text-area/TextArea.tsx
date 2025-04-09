import { LimitedTextarea } from "./LimitedTextarea";


export const Textarea = (props: any) => {


    return (
        <div>
            <LimitedTextarea maxLength={20} />
        </div>
    )
}