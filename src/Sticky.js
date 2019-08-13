import PropTypes from 'prop-types';

export const stickyPropTypes = {
/** Pass in a React component, and it will receive `stuckBottom`, `stuckLeft`, `stuckRight`, and/or `stuckTop` modifiers */
  children: PropTypes.node.isRequired,
  /** If you have an internally scrolling component, pass its ref callback to watch for scroll events */
  scrollTarget: PropTypes.object,
  /** These offsets determine how far from the edge of the page an element must be to count as 'stuck' */
  sides: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
  }),
};
