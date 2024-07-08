<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes"/>
    
    <!-- Root template -->
    <xsl:template match="/data">
                <table border="1">
                    <!-- Table header -->
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    
                    <!-- Rows generated by including item template -->
                    <xsl:apply-templates select="item"/>
                </table>
    </xsl:template>
    
    <!-- Item template -->
    <xsl:template match="item">
        <tr>
            <td><xsl:value-of select="userId"/></td>
            <td><xsl:value-of select="id"/></td>
            <td><xsl:value-of select="title"/></td>
            <td><xsl:value-of select="body"/></td>
        </tr>
    </xsl:template>
    
    <!-- Optionally, define templates for other elements if needed -->
</xsl:stylesheet>
