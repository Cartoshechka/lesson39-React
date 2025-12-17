const CompleteButton = ({ count, onClick, disabled }: { count: number, onClick: () => void, disabled: boolean }) => {
    return <button onClick={onClick} disabled={disabled}>Completed tasks: {count}</button>
}

export default CompleteButton