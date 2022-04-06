import ApplicationLayout from "~/components/ApplicationLayout";

const documents = [
  {
    name: "Monthly_Statement_April_2022",
    fileType: "pdf",
    url: "foo",
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    name: "Monthly_Statement_March_2022",
    fileType: "pdf",
    url: "",
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    name: "Monthly_Statement_February_2022",
    fileType: "pdf",
    url: "",
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    name: "2021_1099",
    fileType: "pdf",
    url: "",
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    name: "2021_1099_bitcoin",
    fileType: "pdf",
    url: "",
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    name: "Monthly_Statement_January_2022",
    fileType: "pdf",
    url: "",
    dateCreated: new Date().toLocaleDateString(),
  },
];

export default function Index() {
  return (
    <ApplicationLayout activeModule="documents">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Document</th>
            <th>Date</th>
            <th>File Type</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document, i) => {
            return (
              <tr key={i} className="hover">
                <th>{i}</th>
                <td>
                  <a className="link" href={document.url}>
                    {document.name}
                  </a>
                </td>
                <td>{document.dateCreated}</td>
                <td>{document.fileType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ApplicationLayout>
  );
}
