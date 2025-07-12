'use client';

import withPrivateRoute from "@/utils/WithPrivateRoute";


export default withPrivateRoute(ManagementHome)
function ManagementHome() {
    return (
        <div>
            <h2>Welcome to the Management Dashboard</h2>
            <p>Select an option from the sidebar.</p>
        </div>
    );
}
