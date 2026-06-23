type GoalCardProps = {
    title: string;
    category: string;
    targetDate: string;
    status: string;
    progress: number;
};

function GoalCard({
    title,
    category,
    targetDate,
    status,
    progress,
}: GoalCardProps) {
    return (
        <div className="goal-card">
            <div className="goal-card-header">
                <div>
                    <h3>{title}</h3>
                    <p>{category}</p>
                </div>

                <span className="goal-status">{status}</span>
            </div>

            <div className="goal-meta">
                <span>Target date: {targetDate || "Not set"}</span>
                <span>{progress}%</span>
            </div>

            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
}

export default GoalCard;