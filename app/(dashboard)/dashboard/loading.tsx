import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import { PostCreateButton } from "@/components/post-create-button";
import { PostItem } from "@/components/post-item";

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
        {Array(5).map((index) => (
          <PostItem.Skeleton key={index} />
        ))}
      </div>
    </DashboardShell>
  );
}
