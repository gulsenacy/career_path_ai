import React from 'react';

type StatCardProps = {
    title: string;
    value: string;
    description?: string;
    icon?: React.ReactNode;
    trendText?: string;
    trendType?: "success" | "neutral";
    progress?: number;
};

function StatCard({ title, value, description, icon, trendText, trendType, progress }: StatCardProps) {
    return (
        <div className="stat-card">
            <div className="stat-card-header">
                <span className="stat-title">{title}</span>
                {icon && <div className="stat-icon-wrapper">{icon}</div>}
            </div>
            <div className="stat-card-body">
                <div className="stat-value-container">
                    <h2 className="stat-value">{value}</h2>
                    {progress !== undefined && (
                        <div className="stat-progress-container">
                            <div className="stat-progress-bar">
                                <div className="stat-progress-fill" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                    )}
                </div>
                {trendText && (
                    <p className={`stat-trend ${trendType === 'success' ? 'trend-success' : 'trend-neutral'}`}>
                        {trendText}
                    </p>
                )}
                {description && !trendText && <p className="stat-description">{description}</p>}
            </div>
        </div>
    );
}

export default StatCard;