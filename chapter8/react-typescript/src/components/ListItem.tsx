import type { FC } from "react";
import type { User } from "../types/user";

export const ListItem: FC<User> = props => {
    const {id, name, age, personalColor = "grey", hobbies} = props;
    return (
        <p style={{color: personalColor}}>
            {/* ? : 옵셔널 체이닝 */}
            {id}:{name}({age}) {hobbies?.join(" / ")} 
        </p>
    );
};