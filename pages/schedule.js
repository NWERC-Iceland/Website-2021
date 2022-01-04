import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 Schedule
    p.
        All activities at NWERC 2021 will be conducted fully online, either via
        a livestream, online conferencing system, or online judging system. The
        schedule is as follows. Time is specified in #[b UTC+1].

    h3 Saturday, November 20th
    p
        table.schedule
            thead
                tr
                    th Time
                    th Activity
                    th Location
            tbody
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211120T09&ah=1&p1=3903") 09:00–10:00]
                    td Welcome, system introduction
                    td #[a(href="https://youtu.be/TJpnBZ_N6sQ") Livestream]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211120T10&ah=2&p1=3903") 10:00–12:00]
                    td Practice session
                    td
                        span Online judging system
                        br
                        span Contestants: link sent via email
                        br
                        span Others: see #[a(href="https://standings.nwerc.is/") online standings]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211120T12&ah=1&p1=3903") 12:00–13:00]
                    td Tech talk: Michal Forišek
                    td #[a(href="https://youtu.be/TJpnBZ_N6sQ") Livestream]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211120T13&ah=1&p1=3903") 13:00–14:00]
                    td Practice session results
                    td #[a(href="https://youtu.be/TJpnBZ_N6sQ") Livestream]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211120T14&ah=1&p1=3903") 14:00–15:00]
                    td Sponsor Presentations
                    td #[a(href="https://youtu.be/TJpnBZ_N6sQ") Livestream]

    h3 Sunday, November 21st
    p
        table.schedule
            thead
                tr
                    th Time
                    th Activity
                    th Location
            tbody
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211121T0930&am=30&p1=3903") 09:30–10:00]
                    td Final remarks
                    td #[a(href="https://youtu.be/YSDqYiEnaDA") Livestream]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211121T10&ah=5&p1=3903") 10:00–15:00]
                    td Competition
                    td
                        span Online judging system
                        br
                        span Contestants: link sent via email
                        br
                        span Others: see #[a(href="https://standings.nwerc.is/") online standings]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211121T11&ah=1&p1=3903") 11:00–12:00]
                    td General coaches' meeting
                    td #[a(href="https://meet.google.com/bzr-jhvr-xxr") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211121T13&ah=1&p1=3903") 13:00–14:00]
                    td UKIEPC coaches' meeting
                    td #[a(href="https://meet.google.com/ypj-ajoa-fvb") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211121T13&ah=1&p1=3903") 13:00–14:00]
                    td Benelux coaches' meeting
                    td #[a(href="https://meet.google.com/cxu-gbuo-tee") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211121T13&ah=1&p1=3903") 13:00–14:00]
                    td Nordic coaches' meeting
                    td #[a(href="https://meet.google.com/smp-qfct-gbe") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211121T13&ah=1&p1=3903") 13:00–14:00]
                    td GCPC coaches' meeting
                    td #[a(href="https://meet.google.com/jhg-irki-jkb") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20211121T15&ah=2&p1=3903") 15:00–17:00]
                    td Results
                    td #[a(href="https://youtu.be/YSDqYiEnaDA") Livestream]

`;
