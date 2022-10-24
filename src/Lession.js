import { useEffect, useState } from "react";

const courses = [
    {
        id: 1,
        name: "HTML, CSS"
    },
    {
        id: 2,
        name: "Javascript"
    },
    {
        id: 3,
        name: "ReactJS"
    }
]

function Lession() {
    const [lessionId, setLessionId] = useState(1);

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lession-${lessionId}`,handleComment)

        return() => {
            window.removeEventListener(`lession-${lessionId}`, handleComment)
        }
    }, [lessionId])

    return (
        <div>
            <ul>
                {courses.map(course => (
                    <li 
                        key={course.id}
                        style={{
                            color: lessionId === course.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessionId(course.id)}
                    >
                        {course.name}
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default Lession;