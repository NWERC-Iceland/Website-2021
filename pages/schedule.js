import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 Schedule
    p.
        All activities at NWERC 2020 will be conducted fully online, either via
        a livestream, online conferencing system, or online judging system. The
        preliminary version of the schedule is as follows. Time is specified in #[b UTC+1].

    p.
        #[b NOTE]: Many countries in the region transition into summer time on
        Sunday, the day of the main competition. Click on an event time in the
        schedule below to see how it translates to your local timezone.

    h3 Saturday, March 27th
    p
        table.schedule
            thead
                tr
                    th Time
                    th Activity
                    th Location
            tbody
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210327T09&ah=1&p1=3903") 09:00–10:00]
                    td Welcome, system introduction
                    td #[a(href="https://youtu.be/A4AYKHoP3jI") Livestream]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210327T10&ah=2&p1=3903") 10:00–12:00]
                    td Practice session
                    td
                        span Online judging system
                        br
                        span Contestants: link sent via email
                        br
                        span Others: see #[a(href="https://standings.nwerc.is/") online standings]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210327T12&ah=1&p1=3903") 12:00–13:00]
                    td Tech talk: Andres Löh
                    td #[a(href="https://youtu.be/A4AYKHoP3jI") Livestream]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210327T13&ah=1&p1=3903") 13:00–14:00]
                    td Practice session results
                    td #[a(href="https://youtu.be/A4AYKHoP3jI") Livestream]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210327T14&ah=1&p1=3903") 14:00–15:00]
                    td Sponsor Presentations
                    td #[a(href="https://youtu.be/A4AYKHoP3jI") Livestream]

    h3 Sunday, March 28th
    p
        table.schedule
            thead
                tr
                    th Time
                    th Activity
                    th Location
            tbody
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210328T0930&am=30&p1=3903") 09:30–10:00]
                    td Final remarks
                    td #[a(href="https://youtu.be/AdSJ6hBL7x8") Livestream]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210328T10&ah=5&p1=3903") 10:00–15:00]
                    td Competition
                    td
                        span Online judging system
                        br
                        span Contestants: link sent via email
                        br
                        span Others: see #[a(href="https://standings.nwerc.is/") online standings]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210328T11&ah=1&p1=3903") 11:00–12:00]
                    td General coaches' meeting
                    td #[a(href="https://meet.google.com/mzu-rdhc-tqo") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210328T13&ah=1&p1=3903") 13:00–14:00]
                    td UKIEPC coaches' meeting
                    td #[a(href="https://meet.google.com/yjk-hnfy-oyu") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210328T13&ah=1&p1=3903") 13:00–14:00]
                    td Benelux coaches' meeting
                    td #[a(href="https://meet.google.com/qiv-qsus-pxo") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210328T13&ah=1&p1=3903") 13:00–14:00]
                    td Nordic coaches' meeting
                    td #[a(href="https://meet.google.com/txk-vmpb-eqt") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210328T13&ah=1&p1=3903") 13:00–14:00]
                    td GCPC coaches' meeting
                    td #[a(href="https://meet.google.com/erj-xfhs-dym") Online conference]
                tr
                    td #[a(href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210328T15&ah=2&p1=3903") 15:00–17:00]
                    td Results
                    td #[a(href="https://youtu.be/AdSJ6hBL7x8") Livestream]

`;
