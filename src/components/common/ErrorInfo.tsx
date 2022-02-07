import React from "react";
import "../../App.css";

interface ErrorInfoProps {
    errorInfo: string
};

export const ErrorInfo = ({ errorInfo }: ErrorInfoProps) => {
    return <div className="error-info">
        {errorInfo}
    </div>;
};
