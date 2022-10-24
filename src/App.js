import { useState } from "react";
import Content from "./Content";

function App() {
  // const [job, setJob] = useState('')
  const [show, setShow] = useState(false)
  // const [jobs, setJobs] = useState(() => {
  //   const storageJobs = JSON.parse(localStorage.getItem('jobs'))

  //   return storageJobs ?? [];
  // })

  // const handleAdd = () => {
  //   setJobs(prev => {
  //     const newJobs = [...prev, job];

  //     const localJobs = JSON.stringify(newJobs);
  //     localStorage.setItem('jobs' , localJobs);

  //     return newJobs;
  //   })
  //   setJob('')
  // }

  return (
    <div>
      {/* <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* <ul>
        {jobs.map((job, index) => (
            <li key={index}>{job}</li>
        ))}
      </ul> */}

      {show && <Content/>}
    </div>
  )
}

export default App;
