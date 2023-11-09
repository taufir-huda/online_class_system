
import Image from "next/image";

const StudentData = [
  {
    Id:23001,
    name: "Nasib Islam Aurko",
    institute: "BUET",
    courses: 5
  },
  {
    Id:23002,
    name: "Tonmoy SaHa",
    institute: "BUET",
    courses: 5
  },
  {
    Id:23003,
    name: "Mahir Shahriar",
    institute: "BUET",
    courses: 5
  },
  {
    Id: 23004,
    name: "Abul Hasnat Abdullah",
    institute: "BUET",
    courses: 5
  },
  {
    Id: 23005,
    name: "Abrar Omi",
    institute: "BUET",
    courses: 5
  },
  {
    Id: 23005,
    name: "Abrar Omi",
    institute: "BUET",
    courses: 5
  },
  {
    Id: 23005,
    name: "Abrar Omi",
    institute: "BUET",
    courses: 5
  },
  {
    Id: 23005,
    name: "Abrar Omi",
    institute: "BUET",
    courses: 5
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        All Students
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              User Id
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Institute
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              No of courses
            </h5>
          </div>
        </div>

        {StudentData.map((student, key) => (
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 ${
              key === StudentData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{student.Id}</p>
            </div>

            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={`/images/student/${student.Id}.jpg`} alt="Brand" width={48} height={48} className="rounded-full"/>
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {student.name}
              </p>
            </div>


            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{student.institute}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{student.courses}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
