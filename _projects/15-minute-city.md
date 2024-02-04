
# Spatial Analysis
  
## Network Analysis

One of the purposes of this study is to perform an urban analysis for the amenities within the area of study, at least at the exploratory level. In order to do this, we will employ network analysis techniques. In particular, we will focus in extracting the road network data from OpenStreeMap.

Part of this analysis involves defining which the street typology to be included in the study, in this case, we will extract all the features provided by the "highway" feature by the OSM API. Some description for this process is presented below:

The osmdata package allows building Overpass queries to download OSM vector data that matches our criteria:

- Features tagged as highway=footway, including footpaths, crossings…
- Features tagged as highway=steps, for stairs
- Features tagged as foot=yes, for example bikeways on which foot traffic is permitted.
- Features tagged as highway=living_street, roads where pedestrians can cruise.

Finding the right combination of OSM tags to use is an iterative process, refining the selection at each step.

After extraction, the network needs to be cleansed and prepared for proper analysis. This involves, but is not limited to:

- Edge filtering: this may help remove edges that are too long, e.g. roads, highways, ferry lines that go out of the boundaries of the area of study.
- Removal of disconnected neighborhoods: It's possible that the network has "islands", in which not many points are connected to each other. We can remove those by:


1. Choosing how far we look to determine the size of a neighbourhood.
2. Only keeping the neighbourhoods that have reached that threshold.

If performed appropriately, these steps provide guidance to ensure a proper network topology.

In the case of San Francisco, we will further focus around the prominent area highlighted throughout this whole study: the city center, careful not to confuse with the CBD or the financial district. Here city center, literally means the centroid of San Francisco. 

We now proceed to create an isochrone, with respect to a given point p, and a given travel time t, an isochrone is the line for which it holds that travel time from any point on the line to or from p is equal to t. When using distances instead of time, it is called an [isodistance](https://luukvdmeer.github.io/sfnetworks/articles/sfn04_routing.html).

We calculate the centroid of the extracted San Francisco road network, and a walking speed interval between 3 and 7 km/h. We will continue walking with this pace for 30 minutes.

![iso1](/images/isochrone-sf-30min.png)

This travel time map shows the regions we can reach within different time intervals, namely 10, 20 and 30 minutes walking from an origin, which is the network's centroid, roughly equates to San Francisco city center, as previously stated. This type of analysis is important for urban planners, since it allows them to show spatial horizons (i.e., isolines) that are equal in time.

Isochrones depict areas according to how long it takes to arrive there from some point. These visualizations are particularly useful in transportation planning as they reveal what places are accessible within a set of time horizons. It's important to note that, while they depict useful traveling information, the limitations of this type of analysis is that it only tells me to which places I can reach at equal time intervals.

In order to enrich this analysis, we should include more data, for example, add which type of amenities can be reached within each isochrone. This is similar to the concept of the [15-minute city](https://www.15minutecity.com/), which aims to provide urban planning to achieve a city where everyone has access to essential urban services within a 15 minute walk or bike.

In the following example, the [openrouteservice](https://openrouteservice.org/) API to calculate the isochrones around San Francisco City Hall, then OSM API is used extract three different type of amenities: hospitals, marketplaces and schools, the idea is to exemplify the 15-Minute City concept using open source data. Given the current data, schools and hospitals are within the isochrone. More amenities can easily be added to enrich the analysis.

![iso2](/images/isochrone-ors-15min.png)