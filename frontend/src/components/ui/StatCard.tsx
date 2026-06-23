type StatCardProps = {
    title: string;
    value: string;
    description: string;
};

function StatCard({ title, value, description }: StatCardProps) {
    return (
        <div className="stat-card">
            <p className="stat-title">{title}</p>
            <h2 className="stat-value">{value}</h2>
            <p className="stat-description">{description}</p>
        </div>
    );
}

export default StatCard;