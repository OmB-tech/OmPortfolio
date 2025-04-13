export default function SkillNode({ name, level, color = "emerald" }) {
    // Calculate size based on skill level (65-90)
    const size = 60 + Math.floor(((level - 65) / 25) * 20);
    const colorClasses = {
        emerald: {
            border: "border-emerald-500/50",
            hoverBorder: "group-hover:border-emerald-500",
            gradient: "rgba(16, 185, 129, 0.2)",
            text: "text-emerald-300",
        },
        gold: {
            border: "border-amber-500/50",
            hoverBorder: "group-hover:border-amber-500",
            gradient: "rgba(234, 179, 8, 0.2)",
            text: "text-amber-300",
        },
        red: {
            border: "border-red-500/50",
            hoverBorder: "group-hover:border-red-500",
            gradient: "rgba(239, 68, 68, 0.2)",
            text: "text-red-300",
        },
    };
    // Type-safe color access with fallback
    const colors = colorClasses[color] ?? colorClasses.emerald;
    return (<div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-900 border ${colors.border} transition-all duration-300 hover:scale-110 ${colors.hoverBorder} group`} style={{
            width: `${size}px`,
            height: `${size}px`,
        }}>
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
            background: `conic-gradient(from 0deg, ${colors.gradient} 0%, ${colors.gradient} ${level}%, transparent ${level}%, transparent 100%)`,
        }}></div>
      <span className={`text-xs font-medium ${colors.text}`}>{name}</span>
    </div>);
}
