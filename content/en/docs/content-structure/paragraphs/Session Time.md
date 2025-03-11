---
title: Session Time
---

The Session Time paragraph is used within the Session content type to define the schedule for a session. It allows you to specify the date and time range, as well as the days of the week the session repeats.

### Fields

| Name                  | Machine name              | Required | Description                                                                                                                                                                                                            |
| --------------------- | ------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Date & Time           | field\_session\_time_date | No       |  This field uses the Datetime Range module to create a date/time field with start and end date/time options.  This defines the period when the session is active. For example, January 1, 2024, to January 1, 2025.                                                                                                                                                                |
| Days                  | field\_session\_time_days | No       | Checkboxes to select the days of the week the session repeats.  Available options: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.  If a date range and a day are selected, the session will occur on that day of the week within the specified date range. |
| Session time override | field\_session\_time_override | No       | Use this field to override the session time to text.                                                                                                                                                                                     |
