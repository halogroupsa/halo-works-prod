import Motion from "./motion";

export default function SiteFrame({
  children,
  header,
  footer,
  floatingActions,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  floatingActions: React.ReactNode;
}) {
  return (
    <>
      {header}
      <main id="main">{children}</main>
      {footer}
      {floatingActions}
      <Motion />
    </>
  );
}
