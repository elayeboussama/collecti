const Actions = ({ updateStatus }) => {
    return (
        <div className="fixed bottom-0 flex p-4 space-x-2">
            <button onClick={() => updateStatus("reject")} className="btn btn-error btn-wide">Reject</button>
            <button onClick={() => updateStatus("approve")} className="btn btn-success btn-wide">Approve</button>
        </div>
    )
}

export default Actions