import { mount } from '@vue/test-utils'
import { ref, nextTick } from 'vue'
import { describe, it, expect, vi } from 'vitest'
import CollapsableCommentsList from '../../modules/Comments/resources/js/components/CollapsableCommentsList.vue'

const commentsAreVisible = ref(false)
const commentsAreLoaded = ref(false)
const requestInProgress = ref(false)
const getAllComments = vi.fn(() => Promise.resolve([]))
const toggleCommentsVisibility = () => {
  commentsAreVisible.value = !commentsAreVisible.value
}

vi.mock('../../modules/Comments/resources/js/composables/useComments', () => ({
  useComments: () => ({
    requestInProgress,
    commentsAreVisible,
    commentsAreLoaded,
    toggleCommentsVisibility,
    getAllComments,
  }),
}))

describe('CollapsableCommentsList', () => {
  it('loads comments only once when visibility is toggled', async () => {
    const props = {
      commentableType: 'notes',
      commentableId: 1,
      comments: [],
      count: 1,
    }

    mount(CollapsableCommentsList, { props })
    mount(CollapsableCommentsList, { props })

    toggleCommentsVisibility()

    await nextTick()
    await nextTick()

    expect(getAllComments).toHaveBeenCalledTimes(1)
  })
})
