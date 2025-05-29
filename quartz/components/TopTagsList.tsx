import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, simplifySlug, resolveRelative } from "../util/path"
import style from "./styles/topTagsList.scss"

interface TopTagsListOptions {
  /** The number of top tags to display. Others are grouped. Default: 10 */
  limit?: number
  /** Alignment of the component container. Default: 'center' */
  align?: "left" | "center" | "right"
  /** Whether to display the count of each tag. Default: true */
  displayCount?: boolean
  /** Text for the 'see all' or 'other tags' link. Default: '...' */
  seeAllText?: string
  /** Slug for the main tags index page. Default: 'tags' */
  tagsPageSlug?: FullSlug
  /** Additional CSS class for styling */
  displayClass?: string
}

// Helper function to create a slug from a tag string
function tagToSlug(tag: string): SimpleSlug {
  return simplifySlug(tag.toLowerCase() as SimpleSlug)
}

export default ((userOpts?: TopTagsListOptions) => {
  // Set default options
  const opts: Required<TopTagsListOptions> = {
    limit: userOpts?.limit ?? 3,
    align: userOpts?.align ?? "center",
    displayCount: userOpts?.displayCount ?? false,
    seeAllText: userOpts?.seeAllText ?? "...",
    tagsPageSlug: (userOpts?.tagsPageSlug ?? "tags") as FullSlug,
    displayClass: userOpts?.displayClass ?? "",
  }

  const TopTagsList: QuartzComponent = ({ allFiles, fileData, cfg }: QuartzComponentProps) => {
    const tagCounts: Record<string, { count: number; actualTag: string }> = {}

    // Iterate over all files to count tags
    for (const file of allFiles) {
      const tags = file.frontmatter?.tags
      if (tags && Array.isArray(tags)) {
        for (const tag of tags) {
          if (typeof tag !== 'string' || tag.trim() === '') continue
          const normalizedTag = tag.toLowerCase()
          if (tagCounts[normalizedTag]) {
            tagCounts[normalizedTag].count++
          } else {
            tagCounts[normalizedTag] = { count: 1, actualTag: tag }
          }
        }
      }
    }

    // Sort tags by count in descending order
    const sortedTags = Object.entries(tagCounts)
      .sort(([, aData], [, bData]) => bData.count - aData.count)
      .map(([normalizedTag, data]) => ({
        name: data.actualTag,
        slug: tagToSlug(data.actualTag),
        count: data.count,
      }))

    if (sortedTags.length === 0) {
      return null
    }

    let displayTags = sortedTags
    let remainingCount = 0

    if (opts.limit > 0 && sortedTags.length > opts.limit) {
      displayTags = sortedTags.slice(0, opts.limit)
      remainingCount = sortedTags
        .slice(opts.limit)
        .reduce((sum, tag) => sum + tag.count, 0)
    }

    const hasRemainingTags = remainingCount > 0

    // Clean up the tags base slug
    const tagsBaseSlug = (opts.tagsPageSlug.startsWith('/') 
      ? opts.tagsPageSlug 
      : `/${opts.tagsPageSlug}`) as FullSlug

    return (
      <div class={`top-tags-list align-${opts.align} $(opts.displayClass}`}>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap');`}
        </style>
        
        {displayTags.length === 0 ? (
          <p class="no-tags">No tags found.</p>
        ) : (
          <ul class="tag-list">
            {displayTags.map((tag) => (
              <li key={tag.slug} class="tag-item">
                <a 
                  href={resolveRelative(fileData.slug!, `${tagsBaseSlug}/${tag.slug}` as FullSlug)}
                  class="tag-link"
                >
                  #{tag.name}
                </a>
                {opts.displayCount && (<span class="tag-count">({tag.count})</span>)}
              </li>
            ))}
            {hasRemainingTags && (
              <li class="tag-item see-all">
                <a 
                  href={resolveRelative(fileData.slug!, tagsBaseSlug)}
                  class="tag-link"
                >
                  {opts.seeAllText}
                </a>
                {opts.displayCount && (<span class="tag-count">({remainingCount})</span>)}
              </li>
            )}
          </ul>
        )}
      </div>
    )
  }

  TopTagsList.css = style
  return TopTagsList
}) satisfies QuartzComponentConstructor