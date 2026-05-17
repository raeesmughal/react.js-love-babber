import { useState } from "react"

// Panel is a child while Accordion is a parent

function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <section className="panel">
            <h3>{title}</h3>
            {
                isActive ? (
                    <p>{children}</p>
                ) : (
                    <button type="button" onClick={()=>setIsActive(true)}>
                        Show
                    </button>
                )
            }


        </section>
    )
}



const Accordion = () => {
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>

            <Panel title={'title no. 1'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates porro iure vero illum, voluptatem molestiae facilis natus dicta sint similique consequatur repellat. Eaque enim unde vel nihil quam veniam adipisci!
            </Panel>

            <Panel title={'title no. 2'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab quidem corrupti incidunt, quas ullam voluptatibus officia corporis! Praesentium distinctio deleniti sapiente labore natus. Expedita vitae excepturi facilis assumenda tempore, similique sint consequuntur minus iure sunt libero aliquam cum dolore in hic, fuga perferendis repellat quidem voluptatibus magnam? Vitae, optio?
            </Panel>

        </>
    )
}

export default Accordion