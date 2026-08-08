import type { ApplicationStatus } from "@jooblie/core";

export {
  formatEmploymentType,
  formatJobLocation,
  formatPostedDate,
  formatSalary,
  getCompanyInitials,
} from "@jooblie/ui";

export const applicationStatusLabels: Readonly<
  Record<ApplicationStatus, string>
> = {
  submitted: "Submitted",
  viewed: "Viewed",
  shortlisted: "Shortlisted",
  interviewing: "Interviewing",
  offered: "Offered",
  hired: "Hired",
  rejected: "Rejected",
  withdrawn: "Withdrawn",
};
