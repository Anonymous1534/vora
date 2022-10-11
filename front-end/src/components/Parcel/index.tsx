import DataTable from "react-data-table-component";
const Parcel = () => {
  const data = [
    {
      id: 1,
      parcel_number: "V43340340303",
      volume_weight: "24",
      admission_date: "05/05/2026",
    },
    {
      id: 1,
      parcel_number: "V43340340303",
      volume_weight: "24",
      admission_date: "05/05/2026",
    },
  ];

  const columns = [
    {
      name: "Parcel number",
      selector: (row: any) => row.parcel_number,
    },
    {
      name: "Volume weight",
      selector: (row: any) => row.volume_weight,
    },
    {
      name: "Admission date",
      selector: (row: any) => row.admission_date,
    },
  ];
  return (
    <>
      <div className="overview-page parcel">
        <div className="overview-title">Parcel</div>
      </div>
      <div className="parcel-component">
        <div className="parcel-grid parcel-available">
          <div className="parcel-title">Parcel inline</div>
          <div className="parcel-table">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
        <div className="parcel-grid parcel-request">
          <div className="parcel-title">Parcel request</div>
          <div className="parcel-table">
            <DataTable columns={columns} data={data} selectableRows />
          </div>
          <div className="parcel-contrl">Approve</div>
        </div>
      </div>
    </>
  );
};

export default Parcel;
