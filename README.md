# Flexbox Demos (2024 Edition)

Edward Apostol, February 2024

This repository contains a collection of demos for the Flexbox layout model.

The demos are designed to be used as a reference for developers who are learning about Flexbox for the first time, or for those who want to refresh their knowledge.

## How to use this repository

To use this repo, you will have to 

1. first `git clone` the repository in your git bash shell or mac terminal, and
2. Use the command `git checkout <name-of-branch>` to see the different examples, where `<name-of-branch>` corresponds to a branch in this repo.

For example, if you wanted to see the code for branch 08-flexibility-grow-shrink-basis, which demonstrates how a `flex-grow` can be used expand the size of a child container relative to its siblings, you would perform the command

```git checkout 08-flexibility-grow-shrink-basis``` once you had cloned the repository to your local computer.

After switching to that branch, you can open the `index.html` file in your browser to see the demo in action.

The demos are designed to be viewed in the order of the branch numbers, as the concepts build on each other. However, you can also jump to a specific branch to see a particular concept in action.

The following is a list of the branches in this repository:

1. 01-toggle-flex-container 
2. 02-switch-flex-direction 
3. 03-toggle-flex-wrap 
4. 04-switch-flex-justify-content 
5. 04-switch-flex-justify-content-single 
6. 04-switch-flex-justify-cross-axis 
7. 05-switch-flex-align-items-cross-axis 
8. 06-switch-flex-space-lines-align-content 
9. 07-switch-flex-complex-item-order 
10. 07-switch-flex-item-order 
11. 08-flexibility-grow-shrink-basis 
12. 09-flexibility-flex-grow

Note the main files to explore are the changes made to the `index.html` and `main.css` files in each branch. The javascript file adds additional interactivity to the demos, and are not relevant to learning about Flexbox.

## Key Concepts

The key concepts covered in this repository include:

1. Flex containers and items
2. The `flex-direction` property
3. The `flex-wrap` property
4. The `justify-content` property
5. The `align-items` property
6. The `align-content` property
7. The `order` property
8. The `flex-grow` property
9. The `flex-shrink` property
10. The `flex-basis` property
11. The `flex` shorthand property
12. The `align-self` property
13. The `flex` property

The .css file will have a container class,
called _flexcontainer_ which will set whatever HTML element it is applied to as a flex container.
The .css file will also have a class called _flexitem_
which will set whatever HTML element it is applied to as a flex item.

