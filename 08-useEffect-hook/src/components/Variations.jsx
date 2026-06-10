import React, { useEffect, useState,useRef } from 'react'


const Variations = () => {

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(10);


    // first -> side effect function
    // second -> clean-up function
    // third -> comma seperated dependency list (array), any of the entity updates, your side effect function runs on the spot.

    // useEffect(() => {
    //   first

    //   return () => {
    //     second
    //   }
    // }, [third])



    // 1️⃣️ variation 1 
    // runs on every render
    // below useEffect is gonna run on every render

    // useEffect(() => {
    //   alert('I will run on every render');
    // })



    // 2️⃣ Variation 2
    // runs only once
    // useEffect below is gonna run only once

    // useEffect(() => {
    //   alert('I run only once');
    // }, []);


    // 3️⃣ Variation 3
    // with single depencency
    // runs on initial render and everytime the given depencency updates

    // useEffect(() => {
    //   alert('I will run everytime count is updated')
    // }, [count])




    // 4️⃣ Variation 4
    // multiple dependencies
    // runs on initial render and everytime the given depencencies update

    // const prevCountRef = useRef(count);
    // const prevTotalRef = useRef(total);

    // useEffect(() => {
    //   if (prevCountRef.current !== count) {
    //     alert('count is updated');
    //   } else if (prevTotalRef.current !== total) {
    //     alert('total is updated');
    //   }
    //   prevCountRef.current = count;
    //   prevTotalRef.current = total;
    // }, [count, total])





    // 5️⃣ Variation 5
    // close up function
    // with any variation + callback function returns a close-up function when a component is unmounted

    const prevCountRef = useRef(count);
    const prevTotalRef = useRef(total);

    useEffect(() => {
        if (prevCountRef.current !== count) {
            alert('count is updated');
        } else if (prevTotalRef.current !== total) {
            alert('total is updated');
        }
        prevCountRef.current = count;
        prevTotalRef.current = total;

        return () => {
            // when component is unmounted, this alerts.
            alert('unmounted');
        }
    }, [count, total]);







    function handleClick() {
        setCount(count + 1)
    }
    function handleClickTotal() {
        setTotal(total + 10)
    }

    return (
        <div>
            {/* hello g welcome useEffect hook */}
            {/* <UserDashboard /> */}
            {/* <Count /> */}


            <button type="button" onClick={handleClick}>
                Update Count
            </button>
            <p>Count is : {count}</p>

            <br />


            <button type="button" onClick={handleClickTotal}>
                Update Total
            </button>
            <p>Total is : {total}</p>

        </div>
    )
}

export default Variations