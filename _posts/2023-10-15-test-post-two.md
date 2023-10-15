---
layout: post
title: "Random Variables"
author: "Kamran Arora"
---

Let $$(\Omega, \mathcal{E}, \mathbb{P})$$ be a probability triple and $$(S, \mathcal{F})$$ a measurable space. Then an $$S$$-valued random variable is a measurable map $$X: \Omega \rightarrow S.$$

We then define the law of a random variable by $$L_X := \mathbb{P} \circ X^{-1}$$. In particular, $$L_X$$ defines a measure on $$(S, \mathcal{F})$$ and we have that 

$$
L_X(A) = \mathbb{P}(X \in A) = \mathbb{P}(X^{-1}(A)) = \mathbb{P}(\{\omega \in Omega \vert X(\omega) \in A\})
$$
for any measurable $$A \subset S.$$

If in particular $$S=\mathbb{R}$$ with the Borel sigma algebra then we obtain the cumulative distribution function $$F_X(x) = L_X((-\infty, x]) = \mathbb{P}(X \leq x).$$

Suppose now that L_X is absolutely continuous with respect to some reference measure on $$(S, \mathcal{F})$$ which we call $$\mu$$. Then the Radon-Nikodym derivative

$$
f := \frac{\mathrm{d} L_X}{\mathrm{d} \mu}
$$

defines the probability density function of $X$ and is such that

$$
\mathbb{P}(X \in A) = int_{X^{-1}(A)} \mathop{} \mathrm{d} \mathbb{P} = \int_A f \mathop{} \mathrm{d} \mu.
$$