function StatusBanner({ loading, status }) {
  if (loading) {
    return (
      <div className="bg-slate-900/5 px-5 py-2.5 text-center text-[0.95rem] text-slate-700">
        Loading live portfolio content...
      </div>
    );
  }

  if (!status.message) {
    return null;
  }

  return (
    <div
      className={`px-5 py-2.5 text-center text-[0.95rem] ${
        status.type === "success"
          ? "bg-emerald-700/10 text-emerald-700"
          : "bg-red-700/10 text-red-700"
      }`}
    >
      {status.message}
    </div>
  );
}

export default StatusBanner;
