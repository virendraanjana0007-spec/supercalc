export default function AdSpace({ position }: { position: string }) {
  return (
    <div className="ad-space">
      <p>📢 Ad Space - {position}</p>
      <p className="text-xs mt-1">Google AdSense will be integrated here</p>
    </div>
  );
}
