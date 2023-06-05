// timeline props
type TimelineProps = {
  items: TimelineItem[];
};

export type TimelineItem = {
  eventType: string;
  description: string;
  date: string;
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <ul className="list-none pl-0">
      {items.map((item, index) => {
        return (
          <li key={index}>
            <div className="flex">
              <p className="font-bold">{item.eventType}</p> &nbsp;
              <p>{item.date}</p>
            </div>
            <p>{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
