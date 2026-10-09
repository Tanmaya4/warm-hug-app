<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep content in public TanStack file routes with a shared website shell, because each business section needs a direct, shareable URL.
- Keep company contact channels in one configuration module and leave missing values empty, because unverified contact links must never be invented.
- Keep sample products in a typed catalogue module with explicit sample labels, because the owner has not supplied inventory.
- Enquiries are insert-only for public visitors with database validation and no public reads, because customer details must stay private.
- Use centralized semantic CSS tokens and shared Button variants, because branding must remain consistent across pages.
