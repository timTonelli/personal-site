// Project imports
import { UserIcon, HandThumbUpIcon, CheckIcon } from "./icons"
import { Timeline } from "./Timeline"

const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    Icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    Icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    Icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    Icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    Icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
]

/**
 * @requires client:load
 */
export function WorkSection() {
  return (
    <div className="flow-root">
      <Timeline>
        {timeline.map((e, i) => (
          <Timeline.Event event={e}>
            {i !== timeline.length - 1 && <Timeline.Connector />}
          </Timeline.Event>
        ))}
      </Timeline>
    </div>
  )
}
