import React from "react";

interface MainPageProps {
  name: string;
  data: any;
  loading: boolean;
  error: any;
  onComplete: () => void;
}

const MainPage: React.FC<MainPageProps> = ({
  name,
  data,
  loading,
  error,
  onComplete,
}) => {
  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-info text-lg font-semibold">Loading...</p>
          <progress className="progress progress-primary w-56 mt-4"></progress>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-error text-lg font-semibold">
            Error: {error.message}
          </p>
          <button className="btn btn-outline btn-error mt-4" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
        {data?.hello || name}
      </h1>
      <span>You have successfully setup your Premium Python + React Starter Kit</span>
    </div>
  );
};

export default MainPage;