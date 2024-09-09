import LegacyPage, {
  buildWrappedOnboardTeamMembersPage,
} from "@pages/settings/organizations/[id]/onboard-members";
import type { PageProps } from "app/_types";
import { _generateMetadata } from "app/_utils";
import { WithLayout } from "app/layoutHOC";

export const generateMetadata = async () =>
  await _generateMetadata(
    (t) => t("invite_organization_admins"),
    (t) => t("invite_organization_admins_description")
  );

const Page = ({ params }: PageProps) => {
  return buildWrappedOnboardTeamMembersPage(params.id, <LegacyPage />);
};

export default WithLayout({ Page });