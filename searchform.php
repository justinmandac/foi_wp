<form id="head-search" role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
	<label>
		<button type="submit" form="head-search" value="Submit"><i class="fa fa-search"></i></button>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search this site', 'placeholder' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
	</label>
</form>
