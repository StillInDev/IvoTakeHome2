I attempted an entirely new approach based on recursion.

The function checks:
  if the node contains text, then it applies the specified styles

  if the node is not a text node, the function uses a switch statement to determine the node's type and renders it accordingly

For nodes with children the function recursively calls itself on each child.

I was unable to fully implement the number of the clauses (with my attempt using <ol></ol>). I could have also used a variable and then progressed it based on if the node was a parent &&& clause.

The spacing and indentations are also not identical to the "final output example". I focused on showing the correct information, over the appearances, since I was in a time crunch.
