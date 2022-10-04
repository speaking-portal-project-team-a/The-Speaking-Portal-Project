# Git - Standard Practices
The purpose of this document is to provide our team with a set of standards to follow throughout our capstone project.
With this document, we hope to ensure that we stay organized and consistent throughout the term.

# Branches

We will be following a technique called feature branches, where we create a new branch for every feature which is to be
developed. This allows us to prevent merge conflicts, and closely monitor each new feature we need to create. As well,
feature branches ensure we are properly dividing issues into achievable tasks. Once the feature has been 
completed, and the branch has been merged to main, we will NOT be deleting the branch. If bugs occur with the feature, 
we can return to the branch in order to fix the bug. 

## Naming:
Branch names should be consistent throughout our repository. Below is the naming scheme which we should follow for all 
feature branches: 

<issue-id>_<brief-feature-description>

Ex: 7_create-git-standards-documentation

This naming scheme ensures that we are properly creating issues for each branch in order to ensure gitstats stays happy

### Dashes & Underscores
To stay consistent with the way GitHub displays spaces in words, please use - in your branch name for spaces, and _ for
the separator between the issue id and the feature description. 

# Pull Requests

## Creation:
PR names and branch names will follow a similar syntax, as everything is based on issues.
### Title:
Pull request names should follow a similar syntax to branch names. They should start with the issue # which they aim to 
close, and then continue on to provide a short informative summary of what the pull request accomplishes. Below is the
naming scheme we should follow for all pull requests: 
<issue-id> <short PR summary>
### Description:
Above all else, please ensure you use the closing keyword alongside the # indicator within your PR description, this 
ensures that the issue tagged is successfully resolved. If your PR does not close an issue, explain why. Your 
description should explain what you did, why you did it, and if there are any known issues please mention them within 
the pull request.

## Review:
The goal when reviewing a pull request is to ensure that all code follows the standards we have defined within our code
standards document - to be created when our tech stack is defined.

When leaving comments, be sure you are providing constructive criticism, and if you request changes to the pull request,
please describe precisely what requires change, and why it requires change.

## Merging:
As a rule of thumb, it is the responsibility of the author of the pull request to merge the code once it has been 
approved.

# Issues:

Issue templates have been created for each issue label which was required for the capstone course. Additionally, a bug 
report template has been created - when we detect a bug within the code, please create a new issue for it using the bug
report!

## Naming: 

Each template has a default name following the syntax [label] When creating a new issue, please delete this, and enter 
a brief summary of the issue. 

## Descriptions: 

Please be as descriptive as possible when creating issues. The template is there to guide you along a standard outline,
however, if certain sections are not applicable, or a separate section is required, please add or delete as necessary.
As long as the issue is detailed, that is all that matters.

## Issue Creation:

In order to ensure that your work is properly tracked by gitstats, please ensure you always attach at least one of the
required labels to your issues.

# Commits:

## Commit Message:
This might take a bit to get used to - but please write your commit messages in the imperative. This is a bit weird, but
it ensures the commit messages line up with commit messages that are generated via commands such as git merge or git 
revert. For example, use fix instead of fixed, or add instead of adds. As well, please stick to a character limit of 50
for the summary.

**A properly phrased commit message should be able to complete the following sentence in a grammatically correct 
fashion:**

*if applied, this commit will \<your commit message here>*

## Commit Description:

If you feel your commit requires further explanation, please feel free to add a description. Here you can follow the 
how, what, and why format to describe. Ensure your commit description does not include 72 characters - anything extra
can be explained within pull requests.