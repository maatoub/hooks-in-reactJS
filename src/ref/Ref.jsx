import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const lastPara = useRef();
  const count = useRef(0);
  const [currentValue, setCurrentValue] = useState(0);
  const handleLastPara = () => {
    lastPara.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    count.current = count.current + 1;
    console.log(currentValue);
  }, [count]);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="col-4 mt-5">
        <section className="text-center mt-2">
          <div>
            <button
              className="btn btn-outline-success w-50"
              onClick={handleLastPara}
            >
              Last paragraph
            </button>
          </div>
          <h1>{count.current}</h1>
          <div className="mt-2">
            <button
              className="btn btn-outline-info w-50"
              onClick={() => {
                setCurrentValue((prev) => prev + 1);
              }}
            >
              click me
            </button>
          </div>
        </section>
        <section className="text-center mt-5">
          <img src="https://picsum.photos/id/10/200/200" alt="img1" />
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus
            ullam quod quam neque, cumque illo repellendus, ratione, debitis
            laudantium incidunt facere numquam. Cupiditate necessitatibus
            delectus adipisci autem quo minus.
          </p>
        </section>
        <section className="text-center mt-2">
          <img src="https://picsum.photos/id/12/200/200" alt="img2" />
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus
            ullam quod quam neque, cumque illo repellendus, ratione, debitis
            laudantium incidunt facere numquam. Cupiditate necessitatibus
            delectus adipisci autem quo minus.
          </p>
        </section>
        <section className="text-center mt-2">
          <img src="https://picsum.photos/id/14/200/200" alt="img3" />
          <p className="p-4" ref={lastPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus
            ullam quod quam neque, cumque illo repellendus, ratione, debitis
            laudantium incidunt facere numquam. Cupiditate necessitatibus
            delectus adipisci autem quo minus.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Ref;
