# Discover Elessar

## Explore your data. Understand its structure. Make better decisions.

Exploratory analysis should go beyond a handful of descriptive statistics and automatically generated charts.

Elessar is a Python library for exploratory data analysis and statistical profiling. It turns tabular data into a structured, documented and actionable assessment.

In a single call, Elessar examines variable types, data quality, distributions, statistical associations, unusual observations and multivariate structure. When a target is specified, it also examines potentially predictive variables.

The result is a comprehensive HTML report, visualisations and data preparation recommendations accompanied by Python code.

Explore in depth, without multiplying scripts.

[Discover Elessar](guide.html#features). [View the project on GitHub](https://github.com/Thibautdqb/elessar). [Get started with Python](guide.html#get-started).

### A rigorous approach to statistics

Elessar aims to make numbers interpretable, as well as produce them.

Methods are selected according to the nature of the data. Statistical assumptions, the limitations of tests and situations in which a conclusion remains uncertain are explicitly documented.

A strong association does not automatically imply causation. A highly predictive variable is not necessarily data leakage. And the highest-ranked distribution is not necessarily the true distribution.

Elessar keeps these distinctions at the heart of its analysis.

### From a first inspection to a deeper understanding

- Detect data quality issues.
- Explore relationships between variables.
- Examine distributions and unusual observations.
- Identify redundant dimensions.
- Analyse your time series.
- Prepare variables for the next steps.

All within a familiar Python environment, with a report designed to be read and shared.

Your data deserves more than a summary.

## Use cases

### From a quick inspection to an in-depth analysis

Elessar supports different stages of working with data.

### Data science and machine learning

Before training a model, you need to understand the available variables, their quality, their relationships and the risks of contamination.

Elessar supports this investigation by identifying promising variables, redundancies, missing values and possible transformations.

It helps prepare a suitable modelling protocol; it does not replace one.

### Research and statistical analysis

Researchers and analysts can examine distributions, associations, multivariate structure and time series within the same tool.

Results retain their methodological assumptions, making them easier to check and discuss.

### Financial data analysis

Financial data often exhibits skewed distributions, extreme observations, temporal dependencies and unstable relationships.

Elessar can support an initial exploration of these characteristics, help identify redundancies and examine the statistical structure of time series.

These results are neither validated trading signals nor guarantees of predictive performance.

### Data quality and preparation

When a file comes from an external source, its types, conventions and formats are not always reliable.

Elessar helps identify inconsistencies and establish a reasoned list of possible transformations before the data is used in production.

### Exploring unfamiliar datasets

For a new CSV, Parquet or Excel file, Elessar quickly provides a structured overview.

You have a foundation for exploration that can be developed according to your project's needs, instead of starting from scratch.

## About Elessar

Elessar grew from a simple idea: exploratory analysis deserves the same rigour as the models that follow it.

In many projects, data exploration remains a sequence of separate commands, charts and tests.

This approach often leaves important questions unanswered. Why was a variable interpreted as numeric? Why was this test selected? Are its assumptions appropriate? Is a high correlation credible? Could a transformation contaminate a future evaluation?

Elessar brings these questions into a single analysis process.

The project combines automation, statistics, visualisation and methodological transparency so users can spend more time interpreting their data.

Its ambition is to examine varied datasets with depth and rigour, while keeping the limits of what the data can actually establish in view.

Elessar is not intended to replace the judgement of a statistician or data scientist.

It gives them better tools to explore, verify and understand.

Elessar — See further into your data.

# Features

## Complete statistical exploration in one tool

Elessar brings together families of analyses that are often spread across separate scripts, libraries and notebooks.

### Automatic understanding of variables

Technical data types do not always reveal the true nature of a variable.

An integer may represent an amount, an identifier or a category code. A string may contain a date, an email address, an ordinal scale or a poorly formatted number.

Elessar examines column contents and characteristics to suggest suitable semantic types, with explanations and confidence indicators.

### Data quality

Formatting errors, missing values, duplicates, inconsistencies and unexpected values can substantially change the conclusions of an analysis.

Elessar identifies these issues, prioritises them and suggests checks or corrections.

The recommendations remain explicit: an unusual value is not automatically an error.

### Descriptive statistics and distributions

Elessar produces measures suited to the variable types: central tendency, dispersion, quantiles, skewness, concentration, frequent values and other relevant characteristics.

For eligible numeric variables, it compares distribution families using criteria such as AIC, examines discrepancies in fit and provides normality diagnostics.

The aim is to understand the observed shape of the data, rather than impose a theoretical distribution.

### Associations between variables

Elessar examines numeric, categorical and mixed relationships with appropriate measures, including Pearson, Spearman, Kendall, Cramér's V, the correlation ratio, mutual information and AUC, depending on the context.

Where the assumptions allow, these measures are accompanied by statistical tests, multiple-comparison adjustments or confidence intervals.

Approximate or unavailable inferential results are distinguished from descriptive results.

### Supervised analysis and feature selection

When a target variable is specified, Elessar examines its associations with predictors and compares several selection methods.

Decision trees, random forests, L1 and L2 regularisation and statistical filters contribute to a feature consensus.

Shuffled reference variables, known as shadow features, help contextualise certain importance measures.

Version 1.2 adds a final evaluation independent of the consensus-building process, separating feature selection from its assessment on held-out observations. This version is still in preparation; its features will become publicly available after the official release.

### Multivariate analysis

Elessar looks for redundancy between variables and examines whether dimensionality reduction may be useful.

It provides principal component analysis and exploratory component extraction with varimax rotation, together with diagnostics such as KMO, Bartlett's test, parallel analysis and internal consistency.

These results help explain shared structure. They do not automatically establish the existence of latent constructs.

### Unusual observations

An extreme value may be an anomaly, a rare but legitimate observation or a particularly interesting event.

Elessar combines detection criteria and distinguishes statistical flagging from the decision to clean the data.

The report helps examine the observations concerned, rather than remove them without justification.

### Time series

For data with an identifiable temporal structure, Elessar examines trends, autocorrelation, seasonality and stationarity, among other characteristics.

When the required conditions are met, inferential methods account for temporal dependence.

The limitations of the approximations used are documented.

### A data preparation plan

At the end of an analysis, Elessar proposes a data preparation plan.

Cleaning, transformations, encoding, grouping and other operations are accompanied by explanations and code examples.

For predictive modelling, learned transformations must be fitted only on the training data to avoid contamination between datasets.

# The HTML report

## Your data, brought together in a report

Elessar returns more than Python objects.

It produces a navigable HTML report that brings exploration results, visualisations, alerts and recommendations into a coherent interface.

### An immediate overview

The report starts with the essentials: dataset dimensions, variable types, the proportion of missing values, important alerts and principal findings.

You can quickly identify areas that need further investigation.

### Structured navigation

Analyses are organised into sections: overview, target, feature selection, distributions, unusual observations, data quality, multivariate statistics, time series and preparation.

Each variable also has its own detailed analysis.

### Charts that support interpretation

Histograms, distribution fits, quantile–quantile plots, association matrices, PCA visualisations, time-series charts and outlier visualisations let you examine results from several perspectives.

Visualisations are linked to the corresponding statistics to preserve the context needed for interpretation.

### Findings you can examine

A statistical result should be understandable and placed in its methodological context.

Elessar identifies the methods used and distinguishes descriptive measures from inferential conclusions.

When a result depends on assumptions or an approximation, that distinction forms part of its interpretation.

### Recommendations with code

The report includes data preparation suggestions with Python examples.

These examples provide a reproducible, reviewable starting point. They do not require automatic transformation.

### A portable report

The report can be viewed locally in a browser. Elessar can also generate a self-contained HTML version with its charts embedded.

Results remain accessible through the Python API for further processing.

An analysis you can read, examine and share.

[Explore actual report outputs](index.html#outputs).

# Scientific methodology

## Statistical rigour as a design principle

Automated analysis is useful only when its results can be understood.

Elessar is developed around a principle: every statistical method has assumptions, a domain of application and limitations.

The goal is to choose appropriate methods, rather than apply the same tests uniformly to every dataset.

### A measurement is not a conclusion

A correlation measures an association, not causation.

A p-value depends on the test and its assumptions.

A confidence interval can be interpreted only within an appropriate sampling framework.

And a non-significant result does not establish the absence of a relationship.

Elessar preserves these distinctions in its scientific documentation and in the presentation of results.

### Accounting for dependencies

Observations are not always independent.

Time series, panel data and repeated measurements need particular attention: ignoring their structure can lead to overly optimistic conclusions.

Elessar incorporates specific methods for certain temporal structures, while identifying approximations and the conditions still required for their validity.

### Limiting spurious conclusions

Testing many relationships increases the risk of false positives.

Elessar applies multiplicity adjustments within the relevant test families and distinguishes adjusted results from raw measures.

These adjustments are not presented as a universal guarantee when their assumptions have not been established.

### Preventing data leakage

Excellent predictive performance is not always good news.

It may reflect a legitimate signal, or information that would not have been available at prediction time.

Elessar flags suspicious associations, supports explicit exclusion of variables whose provenance is known and applies a configurable quarantine policy for exact aliases of the target.

A strong association alone is insufficient to establish leakage.

In its selection procedure, v1.2 also reserves an independent final set to evaluate the consensus after the selected features have been fixed. This version remains in preparation.

### Testing methods, as well as execution

Elessar's scientific validation goes beyond checking that functions run.

The project includes tests on synthetic datasets with known properties, comparisons with reference implementations and simulations examining false positives, statistical power and numerical stability, among other aspects.

These validations characterise defined domains of application. They do not provide a guarantee for every possible distribution or data-generating process.

A scientific library should make its evidence as visible as its limitations.

[Read the scientific contract and validation results in the GitHub repository](https://github.com/Thibautdqb/elessar).

# Get started

## Installation and first steps

### Start exploring your data with Python

Elessar is an open-source Python library, available on PyPI and developed publicly on GitHub.

Install the standard package with:

```sh
pip install elessar
```

Elessar requires Python 3.10 or later.

Run your first analysis:

```python
import elessar

report = elessar.see("data.csv")
```

To analyse a target variable:

```python
report = elessar.see("data.csv", target="target")
```

Elessar also works with pandas DataFrames and several other supported tabular representations.

Once exploration is complete, results can be inspected in the terminal, through the Python API and in the generated HTML report.

Analyses can be customised with StoneConfig, including control over methods and computation parameters.

Version 1.2 is being finalised and validated. Features described for this version will become publicly available after its official release.

For the API, parameters and detailed examples, see the technical documentation on GitHub.

[Install Elessar](https://pypi.org/project/elessar/). [Read the documentation](https://github.com/Thibautdqb/elessar#api). [Explore the source code](https://github.com/Thibautdqb/elessar).

## Open source and development

### Open, inspectable and evolving

Elessar is developed as an open-source Python project under the MIT licence.

Its code, tests, validation workflows and methodological documents are publicly accessible.

This transparency lets you examine the statistical choices behind the features, as well as the features themselves.

### Development guided by tests

Each new version aims to improve methodological robustness, consistency of results and compatibility with the Python ecosystem.

Version 1.2 strengthens the isolation of the final evaluation, statistical diagnostics for dependent data, the calibration of certain methods and the precision of report explanations.

Larger changes to the inference engine will undergo dedicated development and validation.

### Contributing to the project

User feedback, bug reports, proposed tests and code contributions are welcome.

A statistical improvement should include a methodological justification and tests that characterise its behaviour.

The GitHub repository is the reference point for following development and contributing to the project.

[GitHub — Thibautdqb/elessar](https://github.com/Thibautdqb/elessar).

## Frequently asked questions

### Is Elessar free?

Yes. Elessar is an open-source project distributed under the MIT licence.

### Is my data sent to a remote service?

Analysis runs in your Python environment. Elessar does not require a cloud service to produce statistics and local reports. How your data is processed depends on the environment and sources you use.

### Do I need to specify a target variable?

No. Elessar can perform unsupervised exploration. When a target is supplied, it adds the appropriate analyses and selection methods.

### Does Elessar replace pandas, SciPy or scikit-learn?

No. It builds on the scientific Python ecosystem to orchestrate analyses, provide consistent diagnostics and produce an integrated report.

### Can Elessar automatically detect every instance of data leakage?

No. It can identify certain target aliases, flag suspicious associations and apply configured exclusions. Establishing whether a variable was actually available at prediction time may require business or temporal information that is absent from the dataset.

### Are p-values always available?

No. Some situations do not permit reliable inference without additional assumptions. Elessar distinguishes descriptive results from conditional, approximate or unavailable tests.

### Is the highest-ranked distribution necessarily the true distribution?

No. AIC rankings compare fitted candidate families. They do not establish that any candidate exactly represents the data-generating process.

### Does Elessar clean the data automatically?

Elessar provides diagnostics and data preparation recommendations with code. Corrections need to be reviewed in context, particularly for unusual observations or supervised transformations.

### Can Elessar work with large files?

Elessar provides mechanisms for progressive reading and large-data processing for supported formats. Practical limits depend on the source, available resources and requested operations.

### Does Elessar guarantee good machine learning models?

No. Elessar helps you understand and prepare data and provides exploratory evaluations. A model's production performance also depends on the problem, validation protocol and changes in the data.

### What is the difference between v1.1 and v1.2?

Version 1.2 aims to strengthen the scientific consistency of analyses, certain inferential methods and the independent evaluation of feature selection. Final details will be confirmed in the official release notes.

## Releases and roadmap

Elessar evolves with a consistent priority: improve statistical reliability without sacrificing practical usefulness.

### Version 1.1 — Released

An exploratory analysis library integrating descriptive statistics, quality diagnostics, distribution analysis, associations, multivariate methods, time series and report generation.

### Version 1.2 — In preparation

An update focused on statistical robustness, preventing contamination during supervised selection, numerical validation and consistency between code, documentation and displayed results.

It will be published after the release checks have been validated.

### Looking ahead

Future development will explore adapting inference methods to data structures, statistical calibration through simulation, variable-provenance diagnostics and more advanced measures of uncertainty.

These are development goals, not features already available.

[Follow development and release notes on GitHub](https://github.com/Thibautdqb/elessar/releases).

<!-- common-footer -->

Elessar — Automated exploratory data analysis and statistical profiling.

An open-source Python library for understanding data, examining relationships and preparing more reliable analyses.

[Documentation](https://github.com/Thibautdqb/elessar#api) · [GitHub](https://github.com/Thibautdqb/elessar) · [PyPI](https://pypi.org/project/elessar/) · [Release notes](https://github.com/Thibautdqb/elessar/releases) · [Scientific methodology](guide.html#methodology) · [MIT licence](https://github.com/Thibautdqb/elessar#license)

Statistical results depend on the data, methods and their assumptions. Automated diagnostics are intended to inform analysis, alongside validation appropriate to the context.
