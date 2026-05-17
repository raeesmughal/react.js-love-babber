import React, { useState } from 'react'


// Panel is a child while Accordion is a parent

function Panel({ title, children, isActive, onShow }) {
    return (
        <section className='panel'>
            <h3>{title}</h3>
            {
                isActive ? (
                    <p>{children}</p>
                ) : (
                    <button type='button' onClick={onShow} >
                        Show
                    </button>
                )
            }
        </section>
    )
}

const Accordion2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel title={'title no. 1'} isActive={activeIndex == 0} onShow={() => setActiveIndex(0)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta ullam consequatur animi nobis cumque doloribus, ipsam reprehenderit voluptates nemo.
            </Panel>
            <Panel title={'title no. 2'} isActive={activeIndex == 1} onShow={() => setActiveIndex(1)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aperiam ad soluta nemo consequatur, a dolorum ullam, corporis, illo nesciunt error eligendi vero praesentium. Ipsam autem molestiae similique totam non odio, eaque reiciendis sequi ipsa fugit, recusandae atque. Fugiat, dolores.
            </Panel>
        </>
    )
}



export default Accordion2