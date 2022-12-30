import React from 'react'
import "./css/DailyStats.css"

const DailyStats = () => {
    return (
        <div className="daily-stats-container gradient-border">
            <div className="metric-container">
                <div className="metric-title">Tok Swap Price</div>
                <div className="metric-value">$0.11 USD</div>
            </div>
            <div className="metric-container">
                <div className="metric-title">Supported</div>
                <div className="metric-value">9 Chains</div>
            </div>
            <div className="metric-container">
                <div className="metric-title">Total Liquidity</div>
                <div className="metric-value">$100M</div>
            </div>
            <div className="metric-container">
                <div className="metric-title">Total Trades</div>
                <div className="metric-value">$9.123M</div>
            </div>
            <div className="metric-container">
                <div className="metric-title">Daily Active Users</div>
                <div className="metric-value">100.k+</div>
            </div>
        </div>
    )
}

export default DailyStats