import { useState } from "react";
import {
  initPersonalDetails,
  initEducationDetails,
  initEmploymentDetails,
} from "./constants/initialData.js";
import EditPersonal from "./components/EditPersonal.jsx";
import EditEducation from "./components/EditEducation.jsx";
import EditEmployment from "./components/EditEmployment.jsx";
import Display from "./components/Display.jsx";
import Header from "./components/Header.jsx";

function App() {
  // manage state of whole cv here

  const [personalDetails, setPersonalDetails] = useState(initPersonalDetails);
  const [educationDetails, setEducationDetails] =
    useState(initEducationDetails);
  const [employmentDetails, setEmploymentDetails] = useState(
    initEmploymentDetails
  );

  const cbfn_updatePersonal = (name, email, phone) => {
    let data = personalDetails;
    data = { name, email, phone };
    setPersonalDetails(data);
  };

  const cbfn_updateEducation = (school, subject, startDate, endDate) => {
    let data = educationDetails;
    data = { school, subject, startDate, endDate };
    setEducationDetails(data);
  };

  const cbfn_updateEmployment = (
    company,
    position,
    responsibilities,
    startDate,
    endDate
  ) => {
    let data = employmentDetails;
    data = { company, position, responsibilities, startDate, endDate };
    setEmploymentDetails(data);
  };

  return (
    <>
      <Header />
      <Sidebar
        personalDetails={personalDetails}
        cbfn_updatePersonal={cbfn_updatePersonal}
        educationDetails={educationDetails}
        cbfn_updateEducation={cbfn_updateEducation}
        employmentDetails={employmentDetails}
        cbfn_updateEmployment={cbfn_updateEmployment}
      />
      <main>
        <Display
          personalDetails={personalDetails}
          educationDetails={educationDetails}
          employmentDetails={employmentDetails}
        />
      </main>
    </>
  );
}

function Sidebar(props) {
  return (
    <aside>
      <EditPersonal
        personalDetails={props.personalDetails}
        updateData={props.cbfn_updatePersonal}
      />
      <EditEducation
        data={props.educationDetails}
        updateData={props.cbfn_updateEducation}
      />
      <EditEmployment
        data={props.employmentDetails}
        updateData={props.cbfn_updateEmployment}
      />
    </aside>
  );
}

export default App;
