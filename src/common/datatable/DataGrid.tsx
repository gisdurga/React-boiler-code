import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

function DataGridComponent(props: any) {
    useEffect(() => {
    });
    return (
            <div style={{ height: 300, width: "300%" }}>
            <DataGrid
                editMode="row"
                rows={props.items}
                columns={props.columns}
                experimentalFeatures={{ newEditingApi: true }}
            />
            </div>
    );
}
export default DataGridComponent;
